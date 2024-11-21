import React, { useState } from 'react';
import { queryDocument } from '../services/nlpService';

const QueryForm = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query) {
            setResponse("Please enter a query.");
            return;
        }
        setLoading(true);
        setResponse("");

        try {
            const result = await queryDocument(query);
            setResponse(result);
        } catch (error) {
            setResponse("Error querying the document.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="query-form-container">
            <h2>Query Document</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={handleQueryChange} 
                    placeholder="Ask a question" 
                />
                <button type="submit">Submit</button>
            </form>
            {loading && <p>Loading...</p>}
            <p>{response}</p>
        </div>
    );
};

export default QueryForm;
