import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import axios from "axios";

export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface ContextResult {
	posts: Post[];
}

// define initial value here
const PostContext = createContext<ContextResult>({
	posts: [],
});

const PostContextProvider = ({ children }: { children: ReactNode }) => {
	const [posts, setPosts] = useState<Post[]>([]);

	const fetchData = async () => {
		const response = await axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.data)
			.catch((e) => console.log(e.message));

		const data = response;
		setPosts(data);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
	);
};

const usePostContext = () => useContext(PostContext);

export { PostContextProvider, usePostContext };

export const MyContext = () => {
	const { posts } = usePostContext();

	return (
		<>
			<h1>MyContext Component</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<h4>{post.title.toUpperCase()}</h4>
						<p>{post.body}</p>
						<hr />
					</li>
				))}
			</ul>
		</>
	);
};
