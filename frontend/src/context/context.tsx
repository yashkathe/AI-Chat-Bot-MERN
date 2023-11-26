import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type User = {
	name: string;
	email: string;
};

type UserAuth = {
	user: User | null;
	isLoggedIn: boolean;
	login: (email: string, password: string) => Promise<void>;
	signup: (name: string, email: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

// react component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoggedIn, setisLoggedIn] = useState(false);

	// check if user cookies are valid and then skip login
	useEffect(() => {});

	const login = async (email: string, password: string) => {};

	const signup = async (name: string, email: string, password: string) => {};

	const logout = async () => {};

	const value = {
		user,
		isLoggedIn,
		login,
		logout,
		signup,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// create variable context that should be used by the childrens

export const useAuth = () => useContext(AuthContext);
