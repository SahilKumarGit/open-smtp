# open-smtp

## V1

- Method: `POST` 
- End Point: `https://open-smtp.onrender.com/v1/send` 
- Body: 
```json
{
  "config": {
    "service": "gmail",
    "user": "example@gmail.com",
    "pass": "zfnpdbpsxaecbnny"
  },
  "payload": {
    "to": ["send1@yahoo.com", "send2@gmail.com"],
    "title": "Hello World!",
    "subject": "Test one",
    "body": "test body"
  }
}
```

- Success Response:
```json
{
  "data": {},
  "message": "Email send successful.",
  "success": true
}
```

- Failed Response:
```json
{
  "data": {},
  "message": "Error message.",
  "success": false
}
```
