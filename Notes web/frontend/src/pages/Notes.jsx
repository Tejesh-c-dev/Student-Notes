import { useState, useEffect } from "react";
import { notesAPI } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [creating, setCreating] = useState(false);
  const { isAuthenticated } = useAuth();

  // Fetch notes on component mount
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const data = await notesAPI.getAllNotes();
      setNotes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNote = async (e) => {
    e.preventDefault();
    if (!newNote.title || !newNote.content) {
      setError("Title and content are required");
      return;
    }

    try {
      setCreating(true);
      const createdNote = await notesAPI.createNote(newNote.title, newNote.content);
      setNotes([createdNote, ...notes]);
      setNewNote({ title: "", content: "" });
      setShowCreateForm(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const handleDeleteNote = async (id) => {
    if (!confirm("Are you sure you want to delete this note?")) return;

    try {
      await notesAPI.deleteNote(id);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter(
    (note) =>
      note.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-500
                     placeholder-gray-400"
        />
      </div>

      {/* Heading & Create Button */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          {isAuthenticated ? "Your Notes" : "Highly Recommended Notes"}
        </h1>
        {isAuthenticated && (
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {showCreateForm ? "Cancel" : "+ New Note"}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-4xl mx-auto mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
          <button onClick={() => setError("")} className="ml-2 font-bold">×</button>
        </div>
      )}

      {/* Create Note Form */}
      {showCreateForm && isAuthenticated && (
        <div className="max-w-4xl mx-auto mb-6 p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Create New Note</h2>
          <form onSubmit={handleCreateNote} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter note title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter note content"
              />
            </div>
            <button
              type="submit"
              disabled={creating}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {creating ? "Creating..." : "Create Note"}
            </button>
          </form>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="max-w-4xl mx-auto text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading notes...</p>
        </div>
      ) : (
        <>
          {/* Notes Cards */}
          {filteredNotes.length > 0 ? (
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredNotes.map((note) => (
                <div
                  key={note._id}
                  className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition relative group"
                >
                  <h2 className="text-lg font-semibold text-gray-800 mb-1">
                    {note.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {note.content}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {note.createdAt && new Date(note.createdAt).toLocaleDateString()}
                  </p>
                  {isAuthenticated && (
                    <button
                      onClick={() => handleDeleteNote(note._id)}
                      className="absolute top-2 right-2 text-red-500 opacity-0 group-hover:opacity-100 transition hover:text-red-700"
                    >
                      🗑️
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto text-center py-12">
              <p className="text-gray-600">
                {searchTerm ? "No notes match your search." : "No notes available yet."}
              </p>
              {isAuthenticated && !searchTerm && (
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Create your first note →
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Notes;
  