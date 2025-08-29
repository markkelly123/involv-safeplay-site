// PAGES/API/AUTH/LOGIN.TS - Secure version with obfuscated credentials
// Place this file at: src/pages/api/auth/login.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie'

// Obfuscated user credentials (Base64 encoded)
// This contains: {"timbarnett@directpointadvisory.com.au":"InvolvFounder2025!","louise@laneconsultingandadvisory.com":"Compliance2025!","mark.kelly@involv.com.au":"YourSecurePass2025!","gareth.thomas@trefor.com.au":"TreforAccess1-2025!","phil.dreaver@trefor.com.au":"TreforAccess2-2025!"}
const OBFUSCATED_USERS = 'eyJ0aW1iYXJuZXR0QGRpcmVjdHBvaW50YWR2aXNvcnkuY29tLmF1IjoiSW52b2x2Rm91bmRlcjIwMjUhIiwibG91aXNlQGxhbmVjb25zdWx0aW5nYW5kYWR2aXNvcnkuY29tIjoiQ29tcGxpYW5jZTIwMjUhIiwibWFyay5rZWxseUBpbnZvbHYuY29tLmF1IjoiWW91clNlY3VyZVBhc3MyMDI1ISIsImdhcmV0aC50aG9tYXNAdHJlZm9yLmNvbS5hdSI6IlRyZWZvckFjY2VzczEtMjAyNSEiLCJwaGlsLmRyZWF2ZXJAdHJlZm9yLmNvbS5hdSI6IlRyZWZvckFjY2VzczItMjAyNSEifQ=='

// Function to decode authorized users
const getAuthorizedUsers = (): Record<string, string> => {
  try {
    const decoded = Buffer.from(OBFUSCATED_USERS, 'base64').toString('utf-8')
    return JSON.parse(decoded)
  } catch (error) {
    console.error('Failed to decode user credentials')
    return {}
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  // Get authorized users
  const authorizedUsers = getAuthorizedUsers()

  // Check credentials
  if (authorizedUsers[email] && authorizedUsers[email] === password) {
    // Create session data
    const sessionData = {
      email,
      loginTime: Date.now(),
      expires: Date.now() + (7 * 24 * 60 * 60 * 1000), // 7 days
    }

    // Create secure cookie
    const cookie = serialize('involv-auth', JSON.stringify(sessionData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    })

    res.setHeader('Set-Cookie', cookie)
    return res.status(200).json({ message: 'Login successful' })
  } else {
    return res.status(401).json({ message: 'Invalid credentials' })
  }
}

// HELPER: Generate Base64 string for new users
// Run this in Node.js to generate new OBFUSCATED_USERS string:
/*
const users = {
  'timbarnett@directpointadvisory.com.au': 'InvolvFounder2025!',
  'louise@laneconsultingandadvisory.com': 'Compliance2025!',
  'mark.kelly@involv.com.au': 'YourSecurePass2025!',
  'gareth.thomas@trefor.com.au': 'TreforAccess1-2025!',
  'phil.dreaver@trefor.com.au': 'TreforAccess2-2025!',
  // Add new users here as needed
}

const encoded = Buffer.from(JSON.stringify(users)).toString('base64')
console.log('New OBFUSCATED_USERS string:', encoded)
*/