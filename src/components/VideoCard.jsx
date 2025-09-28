const VideoCard = ({ video }) => {
  return (
    <Box
      component={Link}
      to={`/videos/${video.id}`}   // <-- go to single video page
      sx={{
        textDecoration: "none",
        color: "inherit",
        width: "31%",
      }}
    >
      {/* Thumbnail with duration overlay */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={video.thumbnail}
          alt={video.title}
          sx={{
            width: "100%",
            height: "144px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            fontSize: "12px",
            borderRadius: "4px",
          }}
        >
          {video.duration}
        </Typography>
      </Box>

      {/* Title */}
      <Typography
        sx={{
          mt: "14px",
          mb: "4px",
          fontWeight: 700,
          fontSize: "15px",
        }}
      >
        {video.title}
      </Typography>

      {/* Time */}
      <Typography sx={{ fontSize: "11px", fontWeight: 400 }}>
        {video.time}
      </Typography>
    </Box>
  );
};