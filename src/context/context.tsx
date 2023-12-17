import {
	userLogin,
	getAuthStatus,
	logoutUser,
	userSignup,
} from "../../helpers/api-functions";
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
	useEffect(() => {
		const checkAuthStatus = async () => {
			const data = await getAuthStatus();
			if (data) {
				setUser({ email: data.email, name: data.name });
				setisLoggedIn(true);
			}
		};
		checkAuthStatus();
	}, []);

	const login = async (email: string, password: string) => {
		const data = await userLogin(email, password);
		if (data) {
			setUser({ email: data.email, name: data.name });
			setisLoggedIn(true);
		}
	};

	const signup = async (name: string, email: string, password: string) => {
		await userSignup(name, email, password);
	};

	const logout = async () => {
		await logoutUser();
		setisLoggedIn(false);
		setUser(null);
		window.location.reload(); // reload webpage
	};

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
