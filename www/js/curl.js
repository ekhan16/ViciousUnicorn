curl 'https://viciousunicorn.firebaseio-demo.com/sagas.json'

curl 'https://viciousunicorn.firebaseio.com/users.json'
curl 'https://viciousunicorn.firebaseio.com/.settings/rules.json?auth=3BV3sXlVNQxYEZJe6ZVc8ODKzdT0seWPvMHUDorw'
curl -X PUT -d '{ "rules": { ".read": true } }' 'https://viciousunicorn.firebaseio-demo.com/.settings/rules.json?auth=3BV3sXlVNQxYEZJe6ZVc8ODKzdT0seWPvMHUDorw'

{"Volume 1: The Journey to Hell":{"Chapter 1":{"Scene 1":"eKhan left me for the gym.", "Scene 2": "Fuck that puto", "Scene 3": "I cried all night."}}}
curl 'https://viciousunicorn.firebaseio.com/Sagas/Volume%201%3A%20The%20Journey%20to%20Hell.json'
curl 'https://viciousunicorn.firebaseio.com/Sagas/Volume%201%3A%20The%20Journey%20to%20Hell/Chapter%201.json'


curl -X POST -d '{"Scene 3" : "That night I cried all night long"}' \
  'https://viciousunicorn.firebaseio.com/Sagas/Volume%201%3A%20The%20Journey%20to%20Hell/Chapter%201.json'

var url = 'https://viciousunicorn.firebaseio.com'
