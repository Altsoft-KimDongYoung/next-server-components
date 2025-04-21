"use client";

// import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

// Todo 타입 정의
interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export default function Test() {
  //   const searchParams = useSearchParams();
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("데이터 로딩 중 오류 발생:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(todo);
    setIsMounted(true);
  }, [todo]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">클라이언트에서 렌더된 제목</h1>
      <div>{isMounted ? "true" : "false"}</div>
      {loading ? (
        <p className="text-gray-500">로딩 중...</p>
      ) : todo ? (
        <div className="border rounded-lg p-4 bg-gray-50">
          <h2 className="text-xl font-semibold mb-3">할 일 정보</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">ID:</span> {todo.id}
            </p>
            <p>
              <span className="font-medium">할 일:</span> {todo.todo}
            </p>
            <p>
              <span className="font-medium">상태:</span>{" "}
              <span
                className={todo.completed ? "text-green-600" : "text-red-600"}
              >
                {todo.completed ? "✅ 완료" : "❌ 미완료"}
              </span>
            </p>
            <p>
              <span className="font-medium">사용자 ID:</span> {todo.userId}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-red-500">데이터를 불러오는데 실패했습니다.</p>
      )}
    </div>
  );
}

// // import { useSearchParams } from "next/navigation";
// import React from "react";

// // Todo 타입 정의
// interface Todo {
//   id: number;
//   todo: string;
//   completed: boolean;
//   userId: number;
// }

// async function fetchTodo(): Promise<Todo> {
//   const res = await fetch("https://dummyjson.com/todos/1");
//   if (!res.ok) {
//     throw new Error("데이터를 불러오는데 실패했습니다.");
//   }
//   return res.json();
// }

// export default async function Test() {
//   //   const searchParams = useSearchParams();
//   const todo = await fetchTodo();

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">서버에서 렌더된 제목</h1>

//       <div className="border rounded-lg p-4 bg-gray-50">
//         <h2 className="text-xl font-semibold mb-3">할 일 정보</h2>
//         <div className="space-y-2">
//           <p>
//             <span className="font-medium">ID:</span> {todo.id}
//           </p>
//           <p>
//             <span className="font-medium">할 일:</span> {todo.todo}
//           </p>
//           <p>
//             <span className="font-medium">상태:</span>{" "}
//             <span
//               className={todo.completed ? "text-green-600" : "text-red-600"}
//             >
//               {todo.completed ? "✅ 완료" : "❌ 미완료"}
//             </span>
//           </p>
//           <p>
//             <span className="font-medium">사용자 ID:</span> {todo.userId}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
