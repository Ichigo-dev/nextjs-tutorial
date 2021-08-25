import { useRouter } from "next/router"
const Post = () => {
    const router = useRouter() 
    const clickHandle = () => {
        console.log(router)
    }
    return (
      <div>
        <p>post: </p>
        <button
          onClick={() => {
            clickHandle();
          }}
        >
          Click
        </button>
      </div>
    );
}

export default Post