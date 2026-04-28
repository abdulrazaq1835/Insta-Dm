import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { AuthShell } from "@/components/auth/AuthShell";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(8, "At least 8 characters").max(100),
});
type FormData = z.infer<typeof schema>;

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Welcome back!");
    navigate("/dashboard");
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your Reel2Revenue account"
      footer={<>Don't have an account? <Link to="/signup" className="text-primary font-medium hover:underline">Sign up</Link></>}
    >
      <GoogleButton onClick={() => toast.info("Google OAuth — connect Lovable Cloud to enable")} />

      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
        <div className="relative flex justify-center text-xs uppercase tracking-widest">
          <span className="bg-card px-3 text-muted-foreground">Or with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@brand.com" className="mt-1.5" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
          </div>
          <Input id="password" type="password" placeholder="••••••••" className="mt-1.5" {...register("password")} />
          {errors.password && <p className="text-xs text-destructive mt-1">{errors.password.message}</p>}
        </div>
        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Sign in <ArrowRight className="h-4 w-4" /></>}
        </Button>
      </form>
    </AuthShell>
  );
}
