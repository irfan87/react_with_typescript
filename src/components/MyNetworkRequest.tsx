import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "../interface/User";

export const MyNetworkRequest = () => {
	const [data, setData] = useState<User[]>([]);

	const fetchData = async () => {
		const response = await axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.data)
			.catch((e) => console.log(e.message));

		setData(response);
		const data = response;

		console.log(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<h1>MyNetworkRequest Component</h1>
			<ul>
				{data.map((d) => (
					<li key={d.id}>
						<p>{d.name}</p>
						<p>{d.email}</p>
						<p>{d.username}</p>
						<p>{d.website}</p>
						<hr />
					</li>
				))}
			</ul>

			{/* {JSON.stringify(data)} */}
		</>
	);
};
