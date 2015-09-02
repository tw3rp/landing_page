# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4

import SocketServer
import socket
import json
import requests
import sendgrid

class MyTCPServer(SocketServer.ThreadingTCPServer):
  allow_reuse_address=True
class MyTCPServerHandler(SocketServer.BaseRequestHandler):
  def handle(self):
    try:
      print "Recieved Data..."
      data = (self.request.recv(1024).decode('UTF-8'))
      json_data = json.loads(data)
      print(data)
      rstr=data
      email=json_data['email']
      text=json_data['text']
      subject=json_data['subject']
      name=json_data['name']
      r = send_simple_message(email,subject,text,name)
      if(r.status_code > 399):
        {
          backup_email(email,subject,text,name)
        }
      print(r.status_code)
      self.request.sendall(rstr);
    except Exception as e:
      print("exception while recieving message: ",e)
def send_simple_message(email,subject,text,name):
  return requests.post(
	"https://api.mailgun.net/v3/sandboxb6c30b915e1a4bae842a445b83773123.mailgun.org/messages",
	auth=("api", "key-90589f2ecf8a10f823b15bab491c687d"),
	data={"from": name + "<mailgun@sandboxb6c30b915e1a4bae842a445b83773123.mailgun.org>",
        "to": [email, "tw3rpp@gmail.com"],
        "subject":subject,
        "text": text})
def backup_email(email,subject,text,name):
  sg = sendgrid.SendGridClient('tw3rp', 'lsp1481991')
  message = sendgrid.Mail()
  message.add_to(email)
  message.set_from("tw3rpp@gmail.com")
  message.set_subject(subject)
  message.set_text(text)
  sg.send(message)
if __name__ == '__main__':
  server = MyTCPServer(('127.0.0.1',6879),MyTCPServerHandler)
  server.serve_forever()
