export default function makeBlog() {
  const title = ["카트", "롤", "배그"];
  const list = title.map((el) => <h1>{el}해보기!</h1>);
  return <div>{list}</div>;
}
