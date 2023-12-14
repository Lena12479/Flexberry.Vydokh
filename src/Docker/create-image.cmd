docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vydokh/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t vydokh/app ../..
