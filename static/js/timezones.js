var Timezone = {
  init : function(cities, formatName){
    this.cities = [];
    this.formatName = formatName;

    for(var key in cities) {
      this.cities.push({
        name: cities[key],
        offset: moment.tz(cities[key]).format('Z')
      });
    }

    this.cities.sort(function(a, b){
      return parseInt(a.offset.replace(":", ""), 10) - parseInt(b.offset.replace(":", ""), 10);
    });

    this.html = this.getHTMLOptions();
    this.currentTimezone = this.getCurrentTimezoneKey();
  },
  getHTMLOptions : function(){
    var html = '';
    var offset = 0;
    var i, c = this.cities.length, city;

    for(i = 0; i < c; i++) {
      city = this.cities[i];
      html += '<option data-offset="' + city.offset + '" value="'+ city.name +'">Timezone: (GMT ' + city.offset + ') ' + this.formatName(city.name) +'</option>';
    }

    return html;
  },
  addNames : function(select){
    return $(select).empty().append($(this.html));
  },
  selectValue : function(select, value){
    value = value || this.currentTimezone;
    var match = $(select).find('option[value="' + value + '"]');
    if (match.length){
      $(select).val(match.val());
    }
    return $(select);
  },
  getCurrentTimezoneKey : function(){
    return moment.tz.guess();
  }
};

$.fn.timezones = function(opts) {
  if(typeof opts === "string") {
    return Timezone[opts].apply(Timezone, Array.prototype.slice.call(arguments));
  }

  opts = $.extend({}, $.fn.timezones.defaults, opts);
  if (opts.tz.zones.length !== 0) {
    moment.tz.load(opts.tz);
  }

  if(!opts.formatName || typeof opts.formatName !== 'function') {
    opts.formatName = function(str) {
      return str;
    };
  }

  Timezone.init(moment.tz.names(), opts.formatName);

  return this.each(function(){
    Timezone.addNames(this);
    Timezone.selectValue(this);
    updateTable();
    $(this).change(function() {
      updateTable();
    });
    return this;
  });
};


$.fn.timezones.defaults = {
  tz: {
    zones: []
  }
};

function updateTable() {
  $("#schedule-table th").each(function() {
    var newTime = moment.tz("2021-06-10 " + $(this).data("time"), "America/New_York").tz($("#timezone-select").val());
    if (newTime.format("DD") != "10") {
      $(this).html(newTime.format("HH:mm A [(June] DD[)]"));
    } else {
      $(this).html(newTime.format("HH:mm A"));
    }
  });
}

$(function() {
  $("#timezone-select").timezones();
});
