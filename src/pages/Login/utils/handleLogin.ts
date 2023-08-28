export const handleSignInWithGithub = async (signInFunction: Function, navigateFunction: Function) => {
    await signInFunction();

    navigateFunction("/");
  };
