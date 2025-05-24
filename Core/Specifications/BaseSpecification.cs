using Core.Interfaces;
using System.Linq.Expressions;

namespace Core.Specifications;

public class BaseSpecification<T>(Expression<Func<T, bool>>? predicate) : ISpecification<T>
{
    protected BaseSpecification() : this(null) { }

    public Expression<Func<T, bool>>? Predicate => predicate;
    public Expression<Func<T, object>>? OrderBy { get; private set; }

    public Expression<Func<T, object>>? OrderByDescending { get; private set; }

    public bool IsDistinct {  get; private set; }

    public int Take { get; private set; }

    public int Skip { get; private set; }

    public bool IsPagingEnabled { get; private set; }

    public IQueryable<T> ApplyPredicate(IQueryable<T> query)
    {
        if (Predicate is not null)
            query = query.Where(Predicate);

        return query;
    }

    protected void AddOrderBy(Expression<Func<T, object>> orderByExpression)
    {
        OrderBy = orderByExpression;
    }

    protected void AddOrderByDescending(Expression<Func<T, object>> orderByDescExpression)
    {
        OrderByDescending = orderByDescExpression;
    }

    protected void ApplyDistinct()
    {
        IsDistinct = true;
    }

    protected void ApplyPaging(int skip, int take)
    {
        Skip = skip;
        Take = take;
        IsPagingEnabled = true;
    }
}

public class BaseSpecification<T, TResult>(Expression<Func<T, bool>>? predicate)
    : BaseSpecification<T>(predicate), ISpecification<T, TResult>
{
    protected BaseSpecification() : this(null) { }

    public Expression<Func<T, TResult>>? Select { get; private set; }

    protected void AddSelect(Expression<Func<T, TResult>> selectExpression)
    {
        Select = selectExpression;
    }
}
