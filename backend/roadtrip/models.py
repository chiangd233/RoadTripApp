from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings

# Create your models here.
CATEGORY_CHOICES = (
    ('Nightlife', 'Nightlife'),
    ('Parks', 'Parks'),
    ('Famous Sites', 'Famous Sites'),
    ('Museums', 'Museums'),
)

STATE_CHOICES = (
    ('AL', 'Alabama'),
    ('AK', 'Alaska'), 
    ('AZ', 'Arizona'), 
    ('AR', 'Arkansas'), 
    ('CA', 'California'), 
    ('CO', 'Colorado'), 
    ('CT', 'Connecticut'), 
    ('DE', 'Delaware'), 
    ('DC', 'District of Columbia'), 
    ('FL', 'Florida'), 
    ('GA', 'Georgia'), 
    ('HI', 'Hawaii'), 
    ('ID', 'Idaho'), 
    ('IL', 'Illinois'), 
    ('IN', 'Indiana'), 
    ('IA', 'Iowa'), 
    ('KS', 'Kansas'), 
    ('KY', 'Kentucky'), 
    ('LA', 'Louisiana'), 
    ('ME', 'Maine'), 
    ('MD', 'Maryland'), 
    ('MA', 'Massachusetts'), 
    ('MI', 'Michigan'), 
    ('MN', 'Minnesota'), 
    ('MS', 'Mississippi'), 
    ('MO', 'Missouri'), 
    ('MT', 'Montana'), 
    ('NE', 'Nebraska'), 
    ('NV', 'Nevada'), 
    ('NH', 'New Hampshire'), 
    ('NJ', 'New Jersey'), 
    ('NM', 'New Mexico'), 
    ('NY', 'New York'), 
    ('NC', 'North Carolina'), 
    ('ND', 'North Dakota'), 
    ('OH', 'Ohio'), 
    ('OK', 'Oklahoma'), 
    ('OR', 'Oregon'), 
    ('PA', 'Pennsylvania'), 
    ('RI', 'Rhode Island'), 
    ('SC', 'South Carolina'), 
    ('SD', 'South Dakota'), 
    ('TN', 'Tennessee'), 
    ('TX', 'Texas'), 
    ('UT', 'Utah'), 
    ('VT', 'Vermont'), 
    ('VA', 'Virginia'), 
    ('WA', 'Washington'), 
    ('WV', 'West Virginia'), 
    ('WI', 'Wisconsin'), 
    ('WY', 'Wyoming')
)



class ThingsTodo(models.Model):
    city = models.CharField(max_length= 50)
    state = models.CharField(max_length= 50, choices = STATE_CHOICES)
    category = models.CharField(max_length= 50, choices = CATEGORY_CHOICES)
    name = models.CharField(max_length= 150)
    time = models.IntegerField(validators = [MinValueValidator(1), MaxValueValidator(24)]) # hours
    description = models.TextField()

    def _str_ (self):
        return self.name
        
class RoadTrip(models.Model):
    name = models.CharField(max_length = 50)
    description = models.TextField()
    time = models.IntegerField(validators = [MinValueValidator(1)]) #days
    thingstodo = models.ManyToManyField(ThingsTodo)
    created_at = models.DateTimeField(auto_now_add = True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def _str_ (self):
        return self.name

    class Meta:
        ordering = ['name']