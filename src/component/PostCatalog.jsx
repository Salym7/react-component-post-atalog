import {useState, useEffect} from "react";

const PostCatalog = () => {

    const [postList, setPost] = useState([]);

    useEffect(() => {
        getPost().then(onPostListLoaded)
    }, [])

    const getPost = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json()
        console.log(data);
        return data
    }

    const onPostListLoaded = (data) => {
        setPost(data)
    }

    return (
        <div className="posts">
            <ul className="posts__list">
                {postList.map((item) => (
                    <li className="posts_single-post" data-post-id={item.id} key={item.id}>
                        <h3 className="posts__post-title">{item.title}</h3>
                        <p className="posts__post-description">{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostCatalog