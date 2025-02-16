export default function ContributePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">How to Contribute</h1>
      <div className="prose prose-lg">
        <h2>Step-by-Step Guide</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Fork the Repository</strong>
            <p>Start by forking our GitHub repository to your account.</p>
          </li>
          <li>
            <strong>Clone Your Fork</strong>
            <pre className="bg-gray-100 p-4 rounded-lg">
              git clone https://github.com/your-username/dev-showcase.git
            </pre>
          </li>
          <li>
            <strong>Add Your Details</strong>
            <p>Create a new JSON file with your information in the appropriate directory.</p>
          </li>
          <li>
            <strong>Commit and Push</strong>
            <pre className="bg-gray-100 p-4 rounded-lg">
              git add .<br />
              git commit -m "Add: Developer Profile - Your Name"<br />
              git push origin main
            </pre>
          </li>
          <li>
            <strong>Create Pull Request</strong>
            <p>Submit your changes through a Pull Request on GitHub.</p>
          </li>
        </ol>
      </div>
    </div>
  );
} 