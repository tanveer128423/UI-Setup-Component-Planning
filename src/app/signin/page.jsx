import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Sign In</h1>
        
        <form className="space-y-4">
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />

          <Button type="submit" text="Sign In" className="w-full" />
        </form>

        <p className="text-sm text-center mt-4 text-black">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </main>
  );
}
