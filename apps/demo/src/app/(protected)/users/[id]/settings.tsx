'use servier';

type Settings = {
  params: { id: string };
};

const Settings = ({ params }: Settings) => {
  return (
    <div>
      <h1>User Settings</h1>
      <p>User ID: {params.id}</p>
    </div>
  );
};

export default Settings;
