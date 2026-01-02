export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card border border-border rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">
          Admin Login
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Admin Email"
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-textPrimary focus:outline-none focus:border-primary"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-textPrimary focus:outline-none focus:border-primary"
          />

          <button
            type="submit"
            className="w-full bg-primary py-3 rounded-lg text-white font-semibold hover:bg-primaryHover transition"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
