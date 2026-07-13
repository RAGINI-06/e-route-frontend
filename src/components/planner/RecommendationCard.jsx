function RecommendationCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

      <h2 className="text-lg font-semibold text-slate-900">
        Recommendation
      </h2>

      <p className="mt-3 text-slate-500 leading-7">
        Your personalized eco-route recommendation will appear here
        after route analysis.
      </p>

    </div>
  );
}

export default RecommendationCard;