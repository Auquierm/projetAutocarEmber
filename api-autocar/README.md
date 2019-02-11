# Node API for Autocar project Team Barbecue sauce

## NPM packages installation

$ npm install

## Endpoints

### Users

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/users 	| Admin | Get users list  |
| POST  |  api/v1/users 	| Admin | Create new user |
| GET 	|  api/v1/users/:userId 	|  Logged | Get user profile information |
| PATCH 	|  api/v1/users/:userId 	|  Logged | Update some fields of a user document |
| DELETE 	|  api/v1/users/:userId 	|  Logged | Delete a user |

### Authentification

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| POST  |  api/v1/auth/register 	| - | Register a new user  |
| POST  |  api/v1/auth/login 	| - | Get an accessToken |
| POST 	|  api/v1/auth/refresh-token 	| - | Refresh expired accessToken |

### Agents

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/agents 	| - | Get agents list  |
| POST  |  api/v1/agents 	| Logged | Create new agent |
| GET 	|  api/v1/agents/:agentId 	| - | Get agent profile information |
| PATCH 	|  api/v1/agents/:agentId 	| Logged | Update some fields of an agent document |
| DELETE 	|  api/v1/agents/:agentId 	| Logged | Delete an agent |

### Clients

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/clients 	| - | Get clients list  |
| POST  |  api/v1/clients 	| Logged | Create new client |
| GET 	|  api/v1/clients/:clientId 	| - | Get client profile information |
| PATCH 	|  api/v1/clients/:clientId 	| Logged | Update some fields of an client document |
| DELETE 	|  api/v1/clients/:clientId 	| Logged | Delete an client |

### Drivers

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/drivers 	| - | Get drivers list  |
| POST  |  api/v1/drivers 	| Logged | Create new driver |
| GET 	|  api/v1/drivers/:driverId 	| - | Get driver profile information |
| PATCH 	|  api/v1/drivers/:driverId 	| Logged | Update some fields of an driver document |
| DELETE 	|  api/v1/drivers/:driverId 	| Logged | Delete an driver |

### Quotes

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/quotes 	| - | Get quotes list  |
| POST  |  api/v1/quotes 	| Logged | Create new quote |
| GET 	|  api/v1/quotes/:quoteId 	| - | Get quote information |

### Surveys

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/surveys 	| - | Get surveys list  |
| POST  |  api/v1/surveys 	| Logged | Create new survey |

### Pricings

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/pricings 	| - | Get pricing list  |
| POST  |  api/v1/pricings 	| Logged | Create new pricing |
| PATCH 	|  api/v1/pricings/:pricingId 	| Logged | Update some fields of an pricing document |

### Trips

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/trips 	| - | Get trips list  |
| POST  |  api/v1/trips 	| Logged | Create new trip |
| PATCH 	|  api/v1/trips/:tripId 	| Logged | Update some fields of an trip document |
