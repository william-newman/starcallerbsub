import { Injectable } from '@angular/core';
import { OAuth2Client } from 'google-auth-library';

@Injectable({
  providedIn: 'root'
})
export class AuthRefreshService {

  constructor() {

    // // Initialize OAuth client
    // const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    // // Generate authorization URL
    // const authorizeUrl = oAuth2Client.generateAuthUrl({
    //   access_type: "offline",
    //   prompt: "consent",
    //   scope: ["https://mail.google.com/"],  // Full Gmail access
    // });

    // // After receiving the code from the callback:
    // const { tokens } = await oAuth2Client.getToken(code);
    // const refreshToken = tokens.refresh_token;
  }
}
