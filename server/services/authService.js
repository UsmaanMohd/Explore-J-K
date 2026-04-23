export const registerUser = async (userData) => {
    const { name, email, password } = userData;
    
    // Safety check constraint validations
    if (!name || !email || !password) {
        throw new Error('Name, Email, and Password are required structurally');
    }

    // Mock output allowing API to successfully simulate auth correctly
    return {
        _id: "mock_registration_id",
        name,
        email,
        token: "mock_jwt_registration_auth_token",
    };
};

export const loginUser = async (credentials) => {
    const { email, password } = credentials;

    // Safety checks ensuring minimal security constraints
    if (!email || !password) {
        throw new Error("Both Email and password are required strictly.");
    }

    // Mock response simulating success DB fetch
    return {
      _id: "mock_active_user",
      name: "Authenticated Explorer",
      email,
      token: "mock_jwt_auth_token_456",
    };
};
