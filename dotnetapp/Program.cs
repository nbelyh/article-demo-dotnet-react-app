using System.Runtime.InteropServices.JavaScript;

// Creates "Main" to please the toolset
return;

public partial class FileProcessor
{
    // Export this method
    [JSExport]
    internal static async Task<int> ProcessFile(byte[] file)
    {
		await Task.Delay(100);
        return file.Length;
    }
}
