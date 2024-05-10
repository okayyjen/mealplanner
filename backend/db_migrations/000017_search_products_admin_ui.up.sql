CREATE OR REPLACE FUNCTION app.search_products(search text)
 RETURNS SETOF bigint
 LANGUAGE plpgsql
 STABLE
AS $function$
BEGIN
    IF search IS NULL OR search = '' THEN
        RETURN QUERY SELECT id FROM app.product;
    ELSE
        RETURN QUERY
            SELECT id
            FROM app.product
            WHERE to_tsvector('english', name_en) @@ plainto_tsquery('english', search)
			or to_tsvector('english', upc) @@ plainto_tsquery('english', search)
            OR to_tsvector('english', array_to_string(product_keywords, ' ')) @@ plainto_tsquery('english', search)
			or to_tsvector('french', name_fr) @@ plainto_tsquery('french', search);
    END IF;
END;
$function$
;
grant execute on function app.search_products(text) to app_user,app_admin,app_meal_designer;
COMMIT;
