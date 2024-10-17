# API for verify OTP

API: `/verify-otp`

**Requirement:** the user has `logged in or registered` (send the `access token` in request).

**Description:**

`User` can verify OTP to login or reset password.

```mermaid
sequenceDiagram
title Auth - verify OTP
    participant AuthController
    participant AuthService
    participant Database

    AuthController ->>+ AuthService: call method verifyOtp
    AuthService ->>+ Database: find an otp by userId
    Database -->>- AuthService: return a record
    alt if does not has record OR has record but OTP is expired
      AuthService -->> AuthController: throw not found error
    end
    alt if has record
        AuthService ->> Database: generate and save refreshToken
        AuthService -->>- AuthController: return accessToken
    end
```
