import React from 'react';

function ResultsDisplay({ results }) {
  const { targetSite, socialData } = results;

  return (
    <div className="mt-8 space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Website Analysis</h2>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-gray-500">Website</dt>
            <dd className="mt-1 text-sm text-gray-900">{targetSite.url}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Monthly Traffic</dt>
            <dd className="mt-1 text-sm text-gray-900">{targetSite.monthlyTraffic}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Discoverability Features</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {targetSite.hasDiscoverability.has ? 'Yes' : 'No'}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Hashtag System</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {targetSite.hasHashtagSystem.has ? 'Yes' : 'No'}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">Estimated User Base</dt>
            <dd className="mt-1 text-sm text-gray-900">
              {targetSite.userBaseEstimate.estimate}
            </dd>
          </div>
        </dl>
      </div>

      {socialData && (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Social Media Mentions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Twitter</h3>
              <ul className="mt-2 space-y-2">
                {socialData.twitter.map((post, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {post.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Reddit</h3>
              <ul className="mt-2 space-y-2">
                {socialData.reddit.map((post, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {post.data.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultsDisplay;