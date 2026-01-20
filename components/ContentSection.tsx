import React, { useState, useMemo } from 'react';
import { CONTENT } from '../constants';
import { ChevronDown, FileText, Star } from 'lucide-react';

const ContentSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedTag, setSelectedTag] = useState<string>('All Tags');
  const [sortByRating, setSortByRating] = useState<boolean>(true);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  // Extract unique categories and tags
  const categories = useMemo(() => {
    const cats = Array.from(new Set(CONTENT.map(item => item.category)));
    return ['All Categories', ...cats];
  }, []);

  const tags = useMemo(() => {
    const allTags = CONTENT.flatMap(item => item.tags);
    const uniqueTags = Array.from(new Set(allTags));
    return ['All Tags', ...uniqueTags];
  }, []);

  // Filter and sort content
  const filteredContent = useMemo(() => {
    let filtered = CONTENT;

    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedTag !== 'All Tags') {
      filtered = filtered.filter(item => item.tags.includes(selectedTag));
    }

    if (sortByRating) {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategory, selectedTag, sortByRating]);

  const visibleContent = filteredContent.slice(0, visibleCount);
  const hiddenCount = filteredContent.length - visibleCount;

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Business': 'bg-blue-100 text-blue-700',
      'Education': 'bg-green-100 text-green-700',
      'Product': 'bg-orange-100 text-orange-700',
      'Productivity': 'bg-purple-100 text-purple-700',
    };
    return colors[category] || 'bg-stone-100 text-stone-700';
  };

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      'Podcast': 'bg-purple-100 text-purple-700',
      'Youtube': 'bg-red-100 text-red-700',
      'Book': 'bg-amber-100 text-amber-700',
      'LinkedIn': 'bg-blue-100 text-blue-700',
      'TikTok': 'bg-pink-100 text-pink-700',
      'twitter': 'bg-sky-100 text-sky-700',
    };
    return colors[tag] || 'bg-stone-100 text-stone-700';
  };

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
          <span>💡</span>
          Content that inspired me
        </h2>

        <div className="flex gap-3 flex-wrap">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowTagDropdown(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg hover:border-stone-300 transition-colors text-sm"
            >
              <span className="text-stone-700">{selectedCategory}</span>
              <ChevronDown size={16} className="text-stone-400" />
            </button>

            {showCategoryDropdown && (
              <div className="absolute top-full mt-2 w-48 bg-white border border-stone-200 rounded-lg shadow-lg z-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategoryDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-stone-50 transition-colors text-sm flex items-center gap-2 ${
                      category === selectedCategory ? 'bg-stone-900 text-white hover:bg-stone-800' : 'text-stone-700'
                    } ${category === categories[0] ? 'rounded-t-lg' : ''} ${category === categories[categories.length - 1] ? 'rounded-b-lg' : ''}`}
                  >
                    {category === selectedCategory && <span>✓</span>}
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tag Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowTagDropdown(!showTagDropdown);
                setShowCategoryDropdown(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg hover:border-stone-300 transition-colors text-sm"
            >
              <span className="text-stone-700">{selectedTag}</span>
              <ChevronDown size={16} className="text-stone-400" />
            </button>

            {showTagDropdown && (
              <div className="absolute top-full mt-2 w-48 bg-white border border-stone-200 rounded-lg shadow-lg z-10">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(tag);
                      setShowTagDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-stone-50 transition-colors text-sm flex items-center gap-2 ${
                      tag === selectedTag ? 'bg-stone-900 text-white hover:bg-stone-800' : 'text-stone-700'
                    } ${tag === tags[0] ? 'rounded-t-lg' : ''} ${tag === tags[tags.length - 1] ? 'rounded-b-lg' : ''}`}
                  >
                    {tag === selectedTag && <span>✓</span>}
                    <span>{tag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort Button */}
          <button
            onClick={() => setSortByRating(!sortByRating)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg hover:border-stone-300 transition-colors text-sm"
          >
            <span className="text-stone-700">Sort by Rating</span>
            <span className="text-stone-400">⇅</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">
                  Tags
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {visibleContent.map((item) => (
                <tr key={item.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-stone-400" />
                      <span className="text-sm text-stone-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`inline-flex px-2 py-1 rounded-md text-xs font-medium ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-stone-300'}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Load More Button */}
        {hiddenCount > 0 && (
          <div className="border-t border-stone-200 py-4 text-center">
            <button
              onClick={() => setVisibleCount(visibleCount + 5)}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-2 mx-auto"
            >
              <span>Load more ({hiddenCount} hidden)</span>
              <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
