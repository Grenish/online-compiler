const Output = ({ output }: { output: string }) => {
  return (
    <div className="w-full h-full p-4">
      <div className="w-full h-full border-2 border-gray-300 rounded-md p-2 font-mono">
        {output || "Output will be shown here..."}
      </div>
    </div>
  );
};

export default Output;
