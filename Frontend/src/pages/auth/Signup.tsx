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
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(8, "At least 8 characters").max(100),
});
type FormData = z.infer<typeof schema>;

export default function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Account created! Redirecting…");
    navigate("/dashboard");
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Start your 14-day Pro trial — no card needed"
      footer={<>Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link></>}
    >
      <GoogleButton onClick={() => toast.info("Google OAuth")} />

      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
        <div className="relative flex justify-center text-xs uppercase tracking-widest">
          <span className="bg-card px-3 text-muted-foreground">Or with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Jane Doe" className="mt-1.5" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" placeholder="you@brand.com" className="mt-1.5" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="At least 8 characters" className="mt-1.5" {...register("password")} />
          {errors.password && <p className="text-xs text-destructive mt-1">{errors.password.message}</p>}
        </div>
        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Create account <ArrowRight className="h-4 w-4" /></>}
        </Button>
        <p className="text-[11px] text-muted-foreground text-center">
          By continuing you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </form>
    </AuthShell>
  );
}
