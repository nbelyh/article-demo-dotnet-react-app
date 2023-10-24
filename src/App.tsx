import { useDotNet } from './useDotNet'

function App() {

  const { dotnet, loading } = useDotNet('/dotnetapp/bin/Release/net7.0/browser-wasm/AppBundle/dotnet.js')

  const fileSelected = async (e: any) => {

    const file = e.target.files[0];
    const data = new Uint8Array(await file.arrayBuffer());

    const result = await dotnet.FileProcessor.ProcessFile(data)

    alert(`Result: ${result}`);
  }

  return (
    <>
      <input disabled={loading} type="file" onChange={fileSelected}></input>
    </>
  )
}

export default App
