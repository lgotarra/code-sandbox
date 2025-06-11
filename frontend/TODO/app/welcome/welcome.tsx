export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1 className="text-3xl font-bold">Welcome to the TODO App</h1>
        <p className="text-lg text-gray-600">
          This application demonstrates two different approaches to managing
          state in a TODO app:
        </p>
        <p className="text-sm text-gray-500 mt-4">
          Choose your preferred method of state management!
        </p>
      </div>
    </main>
  );
}
