# Node API for Autocar project Team Barbecue sauce

## NPM packages installation

$ npm install

## Endpoints

### Users

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/users 	| Admin | Get users list  |
| POST  |  api/v1/users 	| - | Create new user |
| GET 	|  api/v1/users/:userId 	|  Admin - Client - Chauffeur | Get user profile information |
| PATCH 	|  api/v1/users/:userId 	|  Admin - Client | Update some fields of a user document |
| DELETE 	|  api/v1/users/:userId 	|  Admin - Client | Delete a user |

### Authentification

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| POST  |  api/v1/auth/register 	| - | Register a new user  |
| POST  |  api/v1/auth/login 	| - | Get an accessToken |
| POST 	|  api/v1/auth/refresh-token 	| - | Refresh expired accessToken |

### Agents

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/agents 	| Admin | Get agents list  |
| POST  |  api/v1/agents 	| Admin | Create new agent |
| GET 	|  api/v1/agents/:agentId 	| Admin | Get agent profile information |
| PATCH 	|  api/v1/agents/:agentId 	| Admin | Update some fields of an agent document |
| DELETE 	|  api/v1/agents/:agentId 	| Admin | Delete an agent |

### Clients

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/clients 	| Admin | Get clients list  |
| POST  |  api/v1/clients 	| - | Create new client |
| GET 	|  api/v1/clients/:clientId 	| Admin - Client | Get client profile information |
| PATCH 	|  api/v1/clients/:clientId 	| Admin - Client | Update some fields of a client document |
| DELETE 	|  api/v1/clients/:clientId 	| Admin - Client | Delete a client |

### Drivers

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/drivers 	| Admin - Driver | Get drivers list  |
| POST  |  api/v1/drivers 	| Admin - Driver | Create new driver |
| GET 	|  api/v1/drivers/:driverId 	| Admin - Driver | Get driver profile information |
| PATCH 	|  api/v1/drivers/:driverId 	| Admin - Driver | Update some fields of a driver document |
| DELETE 	|  api/v1/drivers/:driverId 	| Admin - Driver | Delete a driver |

### Quotes

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/quotes 	| Admin | Get quotes list  |
| POST  |  api/v1/quotes 	| - | Create new quote |
| GET 	|  api/v1/quotes/:quoteId 	| Admin | Get quote information |
| PATCH 	|  api/v1/quotes/:quoteId 	| Admin | Update some fields of a quote document |
| DELETE 	|  api/v1/quotes/:quoteId 	| Admin | Delete a quote |

### Surveys

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/surveys 	| Admin | Get surveys list  |
| POST  |  api/v1/surveys 	| Client | Create new survey |

### Pricings

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/pricings 	| Admin | Get pricing list  |
| POST  |  api/v1/pricings 	| Admin | Create new pricing |
| PATCH 	|  api/v1/pricings/:pricingId 	| Admin | Update some fields of a pricing document |

### Trips

|Method	| URI | Securized | Result |
|---	|---	|---	|---	|
| GET   |  api/v1/trips     | Admin - Driver | Get trips list  |
| POST  |  api/v1/trips 	| Admin | Create new trip |
| PATCH 	|  api/v1/trips/:tripId 	| Admin | Update some fields of a trip document |
