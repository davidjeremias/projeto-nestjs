CREATE TABLE dbo.token(
    [id] INT PRIMARY KEY,
    [hash] NVARCHAR(255) NOT NULL,
    [username] NVARCHAR(100) NOT NULL
)