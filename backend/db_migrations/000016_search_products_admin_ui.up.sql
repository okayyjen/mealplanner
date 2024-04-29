CREATE OR REPLACE FUNCTION app.search_products(search text) RETURNS SETOF bigint AS $$
BEGIN
    IF search IS NULL OR search = '' THEN
        RETURN QUERY SELECT id FROM app.product;
    ELSE
        RETURN QUERY
            SELECT id
            FROM app.product
            WHERE to_tsvector('english', name_en) @@ search::tsquery
            ORDER BY ts_rank(to_tsvector('english', name_en), search::tsquery) DESC;
    END IF;
END;
$$ LANGUAGE plpgsql STABLE;
grant execute on function app.search_products(text) to app_user,app_admin,app_meal_designer;
COMMIT;
