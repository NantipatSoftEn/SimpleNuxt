export default function({ store, redirect }: any) {
  // If the user is not authenticated
  console.log(`check`, store.state.auth.authenticated);
  if (!store.state.auth.authenticated) {
    return redirect("/login");
  }
}
