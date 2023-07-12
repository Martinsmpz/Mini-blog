import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../Context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts } = useFetchDocuments("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");

  console.log(uid);
  console.log(posts);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Manage your projects</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Posts not found</p>
          <Link to="/CreatePost" className="btn">
            Create first post
          </Link>
        </div>
      ) : (
        <div className={styles.post_header}>
          <span>Title</span>
          <span>Action</span>
        </div>
      )}

      {posts &&
        posts.map((post) => (
          <div className={styles.post_row} key={post.id}>
            <p>{post.title}</p>
            <div className={styles.actions}>
              <Link to={`/posts/${post.id}`} className="btn btn-outline">
                See
              </Link>
              <Link to={`/editpost/${post.id}`} className="btn btn-outline">
                Edit
              </Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className="btn btn-outline btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;