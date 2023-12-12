import axios from "axios";

export const userLogin = async (email: string, password: string) => {
	try {
		const response = await axios.post("/user/login", { email, password });
		if (response.status !== 200) {
			throw new Error()
		}
		const data = await response.data;
		return data;
	} catch (err: any) {
		throw new Error(`Error! Cannot Login. ${err.message}`);
	}
};

export const getAuthStatus = async () => {
	try {
		const response = await axios.get("/user/auth-status");
		if (response.status !== 200) {
			throw new Error('Could not verify authentication status')
		}
		const data = await response.data;
		return data;
	} catch (err: any) {
		throw new Error(err.message);
	}
};

export const postChatRequest = async (message: string) => {
	try {
		const response = await axios.post("/chat/new" , {message});
		console.log(response)
        if (response.status !== 200) {
			throw new Error()
		}
		const data = await response.data;
		return data;
	} catch (err: any) {
        console.log(err)
		throw new Error(err.message);
	}
};