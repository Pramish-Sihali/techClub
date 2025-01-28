import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from 'next/server'


// app/auth/signup/route.ts 
export async function POST(request: Request) {
    const { email, password } = await request.json()
    const supabase = createRouteHandlerClient({ cookies })
   
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        data: {
          role: 'user' // Default role
        }
      }
    })
   
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
   
    return NextResponse.json({ user: data.user })
   }
   