import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-balance">Welcome</CardTitle>
          <CardDescription className="text-muted-foreground">Choose an option to get started</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link href="/signup">Create Account</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
