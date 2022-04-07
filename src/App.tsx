import Post from './components/Post';
import { useState } from 'react';

export interface PostModel {
  id: string;
  liked: boolean;
  username: string;
  images: string[];
  images2: Array<string>;
}

function App() {
  const [posts] = useState<PostModel[]>([
    {
      id: '1',
      images: ['https://www.frontacademy.com.br/images/code-sample.png'],
      images2: ['https://www.frontacademy.com.br/images/code-sample.png'],
      liked: false,
      username: 'bruno.lucena',
    },
    {
      id: '2',
      images: ['https://www.frontacademy.com.br/images/mercado.png'],
      images2: ['https://www.frontacademy.com.br/images/code-sample.png'],
      liked: true,
      username: 'gabriel',
    },
    {
      id: '3',
      images: ['https://www.frontacademy.com.br/images/code-sample.png'],
      images2: ['https://www.frontacademy.com.br/images/code-sample.png'],
      liked: true,
      username: 'gabriel',
    }
  ]);

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Post
            key={`${post.id} ${index}`}
            id={post.id}
            images={post.images}
            images2={post.images2}
            liked={post.liked}
            username={post.username}
          />
        )
      })}
    </div>
  );
}

export default App;
