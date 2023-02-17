UPDATE balance SET denom case 
    when denom = "usdc" then 0.000001 
    when denom = "swth" then 0.00000005 
    when denom = "tmz" then 0.003;

SELECT address, SUM(amount*denom) AS total_balance 
FROM balances 
GROUP BY address 
WHERE total_balance > 500 
AND address IN (
    SELECT address FROM trades 
    WHERE block_height > 730000
    );

