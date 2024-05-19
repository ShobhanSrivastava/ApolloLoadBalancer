## Data entities

- User
```JSON
User
{
    "id": "873628478634",
    "username": "shobhan2002",
    "password": "some_hashed_string",
    "role": "admin" | "user"
}
```

- Target
```JSON
Target
{
    "id": "873628478634",
    "alias": "VM1 Instance",
    "ip": "127.0.0.1",
    "port": "3000"
}
```

- Policy
```JSON
Policy
{
    "id": "873628479834",
    "alias": "helper.xyz.com",
    "algorithm": "round_robin",
    "allowed_ips": <Optional>[
        "127.0.0.2", 
        "127.0.0.1"
    ],
    "blocked_ips": <Optional>[

    ],
    "available_servers": [
        {
            "id": "873628478634",
            "alias": "VM1 Instance",
            "ip": "127.0.0.1",
            "port": "3000"
        },
        {
            "id": "873628478635",
            "alias": "VM2 Instance",
            "ip": "127.0.0.2",
            "port": "3000"
        },
        {
            "id": "873628478636",
            "alias": "VM3 Instance",
            "ip": "127.0.0.3",
            "port": "3000"
        }
    ]
}
```