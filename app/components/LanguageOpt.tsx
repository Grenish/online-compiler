const LanguageOpt = ({
  onLanguageChange,
}: {
  onLanguageChange: (lang: string) => void;
}) => {
  const languages = ["Python", "JavaScript", "C++", "Ruby"];

  return (
    <div className="p-4">
      <label htmlFor="language" className="font-bold">
        Language:
      </label>
      <select
        id="language"
        onChange={(e) => onLanguageChange(e.target.value)}
        className="ml-2 p-2 border-2 border-gray-300 rounded-md"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageOpt;
