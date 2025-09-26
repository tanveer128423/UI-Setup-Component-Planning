import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        
        <form className="space-y-4">
          <Input label="Full Name" type="text" placeholder="John Doe" />
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Input label="Confirm Password" type="password" placeholder="••••••••" />

          <Button type="submit" text="Sign Up" className="w-full" />
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </main>
  );
}
