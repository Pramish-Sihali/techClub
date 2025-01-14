// app/(auth)/types.ts
export interface SignUpFormData {
    fullName: string;
    studentId: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface LoginFormData {
    email: string;
    password: string;
    rememberMe: boolean;
  }