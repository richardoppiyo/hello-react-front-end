const getGreetings = async () => {
  const res = await fetch('http://127.0.0.1:3001');
  const data = await res.json();
  return data;
};

export default getGreetings;
